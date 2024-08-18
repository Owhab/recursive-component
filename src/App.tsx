import { FolderIcon } from '@heroicons/react/24/solid'
import './App.css'
import { DocumentIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

type Node = {
  name: string,
  nodes?: Node[],
  length?: number | undefined
}

function App() {

  const nodes:Node[] = [
    {
      name: "Home",
      nodes: [
        {
          name: "Movies",
          nodes: [
            {
              name: "Horror",
              nodes: [
                {
                  name: "Halloween",
                  nodes: []
                }
              ]
            },
            {
              name: "Comedy",
              nodes: [
                {
                  name: "Tragedy"
                }
              ]
            },
            {
              name: "Drama", 
              nodes: [
                {
                  name: "Love",
                  nodes: []
                },
                {
                  name: "Romance",
                  nodes: []
                },
                {
                  name: "Action", 
                  nodes: [
                    {
                      name: "2000",
                      nodes: []
                    },
                    {
                      name: "2010",
                      nodes: []
                    },
                    {
                      name: "2020",
                      nodes: []
                    }

                  ]
                }
              ]
            }, 
            {
              name: "Sci-Fi",
              nodes: []
            }
          ]
        },
        {
          name: "Music", 
          nodes: [
            {
              name: "Pop",
              nodes: []
            },
            {
              name: "Rock",
              nodes: []
            },
            {
              name: "Jazz",
              nodes: []
            }
          ]
        },
        {
          name: "Pictures", 
          nodes: [
            {
              name: "Nature",
              nodes: []
            },
            {
              name: "Animals",
              nodes: []
            },
            {
              name: "Sports",
              nodes: []
            },
            {
              name: "Food",
              nodes: []
            }
          ]
        },
        {
          name: "Documents", 
          nodes: [
            {
              name: "Personal",
              nodes: [
                {
                  name: "Resume",
                  nodes: [
                    {
                      name: "CV.pdf",
                    }
                  ]
                }, 
                {
                  name: "Cover Letter",
                  nodes: [
                    {
                      name: "Cover Letter.pdf",
                    }
                  ]
                }, 
                {
                  name: "Bookmarks",
                  nodes: [
                    {
                      name: "Bookmarks.pdf",
                    }
                  ]
                }
              ]
            },
            {
              name: "Work",
              nodes: []
            }
          ]
        },
        {
          name: "password.txt",
        },
        {
          name: "README.md",
        }
      ]
    }
   
   ];

  return (
    <div className='p-8 max-w-sm mx-auto'>
      <ul>
        <li className='my-1.5'>
          <ul className='pl-6'>
            {
              nodes.map((node) => 
                <Folder node={node} key={node.name} />
              )
            }
          </ul>
        </li>

      </ul>
      
       
    </div>
  )
}

function Folder({node}: {node: Node}) {
  const [Open, setOpen] = useState(false);

  return <li className='my-1.5' key={node.name}>
  <span className='flex items-center gap-1.5'>
    {
      node.nodes && node.nodes?.length > 0 && (
        <button className='cursor-pointer' onClick={() => setOpen(!Open)}>
          <ChevronRightIcon className={`size-6 text-gray-600 transition-all ${Open ? 'rotate-90' : ''}`} />
        </button>
      )
    }
    {
      node.nodes ? (
        <FolderIcon className={`size-6 text-sky-600 ${node.nodes && node.nodes?.length === 0 ? 'ml-[22px]' : ''}`} />
      ) : (
        <DocumentIcon className='size-6 text-gray-600' />
      )
    }
    {node.name}
  </span>
    {
      Open && (
        <ul className='pl-[30px]'>
          {
            node.nodes?.map((node) => 
              <Folder node={node} key={node.name}/>
            )
          }
        </ul>
      )
    }
</li>
}
export default App
